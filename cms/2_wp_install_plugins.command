cd /var/www/html

### Wordpress command line plugin installation ###
### comment out the plugins you don't want to install ###

wp plugin delete hello
wp plugin delete akismet

wp plugin install regenerate-thumbnails --activate
wp plugin install wp-mail-smtp --activate
wp plugin install webp-converter-for-media --activate

### curl "http://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9OTM1OTd8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE2LTExLTE0IDE2OjM5OjI3" > advanced-custom-fields-pro.zip
### wp plugin install advanced-custom-fields-pro.zip --activate
### rm advanced-custom-fields-pro.zip

wp plugin install "http://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9OTM1OTd8dHlwZT1kZXZlbG9wZXJ8ZGF0ZT0yMDE2LTExLTE0IDE2OjM5OjI3" --activate


wp plugin install acf-extended --activate