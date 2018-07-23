@servers(['live' => 'deployer@213.52.130.114', 'local' => 'localhost'])

@setup
    $repository = 'git@github.com:arukompas/drone-test.git';
    $app_dir = '/var/www/ci-test';
    $releases_dir = $app_dir . '/releases';
    $release = date('Ymd_His');
    $new_release_dir = $releases_dir . '/' . $release;
@endsetup

@story('deploy', ['on' => 'live'])
    clone_repository
    run_composer_install
    run_npm_install
    build_front_end_assets
    update_symlinks
    restart_services
@endstory

@task('list-releases', ['on' => 'live'])
    cd {{ $releases_dir }}
    ls -l
@endtask

@task('clone_repository')
    echo "Cloning repository..."
    [ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}
    @if($commit)
        echo "Checking out to commit {{ $commit }}"
        git clone {{ $repository }} {{ $new_release_dir }}
        cd {{ $new_release_dir }}
        git reset --hard {{ $commit }}
    @else
        echo "Using latest commit"
        git clone --depth 1 {{ $repository }} {{ $new_release_dir }}
    @endif
@endtask

@task('run_composer_install')
    echo "Starting deployment ({{ $release }})"
    cd {{ $new_release_dir }}
    composer install --prefer-dist --no-scripts -q -o
@endtask

@task('run_npm_install')
    echo "Running npm install..."
    cd {{ $new_release_dir }}
    rm -rf node_modules/
    npm install --quiet
@endtask

@task('build_front_end_assets')
    echo "Building production assets..."
    cd {{ $new_release_dir }}
    npm run production
@endtask

@task('update_symlinks')
    echo "Linking storage directory..."
    rm -rf {{ $new_release_dir }}/storage
    ln -nfs {{ $app_dir }}/storage {{ $new_release_dir }}/storage

    echo "Linking .env file..."
    ln -nfs {{ $app_dir }}/.env {{ $new_release_dir }}/.env

    echo "Caching settings..."
    php artisan config:clear
    php artisan cache:clear
    php artisan config:cache

    echo "Linking current release..."
    ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current

    echo "Release ({{ $release }}) is now LIVE!"
@endtask

@task('restart_services')
    cd {{ $new_release_dir }}

    sudo service php7.1-fpm restart
    php artisan queue:restart
@endtask

@task('prep', ['on' => 'local'])
    npm run dev
    ./vendor/bin/phpunit
@endtask