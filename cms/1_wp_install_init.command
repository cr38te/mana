cd /var/www/html

echo ‘url, without trailing forward slash - e.g. http://localhost:8000 ‘
read url

echo ‘title: ’
read title

echo ‘admin user: ‘
read admin

echo ‘email: ’
read email

echo -n ‘Provide custom theme folder name: ‘
read folder

multisite="N"
echo -n "Would you like to install Wordpress as a Multisite: (y/N) "
read multisite

if [[ $multisite == "y" ]];
then
    echo "Installing WP as Multi site"
    wp core multisite-install --url=$url --title="$title" --admin_user=$admin --admin_email=$email
else
    echo "Installing WP as Single site"
    wp core install --url=$url --title="$title" --admin_user=$admin --admin_email=$email
fi

cd wp-content/themes/
mkdir -p $folder

cd $folder

printf "<?php\n// Silence is golden." > index.php
printf "<?php" > functions.php
printf "<?php // Template name: Options" > options.php
printf "<?php // Template name: Main navigation" > main-navigation.php
printf "<?php // Template name: Footer" > footer.php
printf "<?php // Template name: Social media" > social-media.php
printf "<?php // Template name: Contact information" > contact-information.php

echo -n ‘Custom theme name/website name: ‘
read theme

printf "/*\nTheme Name: $folder\nDescription: A custom theme developed for $theme. Base structure CSS Flex\nAuthor: cr38te.com - Rudy A. Croes, André Zaandam\nAuthor URI: https://cr38te.com\nVersion: 1.0\n*/" > style.css

mkdir acfe-php

mkdir api
cd api
printf "<?php\n// Silence is golden." > objects.php

wp theme activate $folder

wp core update
wp core update-db

wp post create --post_type=page --post_status=publish --post_title='Options' --post_name=options --page_template=options.php
wp post create --post_type=page --post_status=publish --post_title='Main navigation' --post_name=main-navigation --page_template=main-navigation.php
wp post create --post_type=page --post_status=publish --post_title='Footer' --post_name=footer --page_template=footer.php
wp post create --post_type=page --post_status=publish --post_title='Social media' --post_name=social-media --page_template=social-media.php
wp post create --post_type=page --post_status=publish --post_title='Contact information' --post_name=contact-information --page_template=contact-information.php

wp option update permalink_structure '/%postname%'
wp rewrite structure '/%postname%'

echo -n ‘Did you copy PASSWORD above?! Y/N ‘
read copied

echo Bye!