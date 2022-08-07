<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'soko' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'U],jU4.vkZU<c[;AE}yspK4w,)BsoLKzR@oJ!vOC_.wX;$o|%U`2D2]52UxL[I&0' );
define( 'SECURE_AUTH_KEY',  '-4[]8[MUciO E+o4qLtalc<Kn/>T)QCX<FS|R,2#*qjNJoQdoKQ[<2:o@u`oJL~~' );
define( 'LOGGED_IN_KEY',    'M|-^ZejEh1UqS^beb#Xi?eLL_Z>G]}1guhD%sQQ!tg;P+O,EO~1U6|Drd(qhy,mt' );
define( 'NONCE_KEY',        'Uv5AvEFRzME14L=cO)7_2ZQo9V+o+sH&3sEi?e-/Sg$7TL=>4C(e+ _IEGQwk<&C' );
define( 'AUTH_SALT',        'B[3l%Z%)+ec^l*Ilp{af#Cm@WUVRH[ZI60@=;:(T~Kn.m`T0+b9aa$[^CjssEXe)' );
define( 'SECURE_AUTH_SALT', 'K$n?*RMFWvD=so^s(Y+|R>=j*N}d`reKtN}R@#WuK/@4%b>2).M5]K&*[SWsI+w(' );
define( 'LOGGED_IN_SALT',   'Of1)&)ge0n`5S~_JA#)oT_~7}#T|DVY-BT%^t8,[$ynE7^jO5u#}K}qz)3l24eFu' );
define( 'NONCE_SALT',       'Jkw`U+{65Wj;*,$luKhfR/-2xWr{6?TL7Adec(^8(Hz/:U@@(<IGnLdnJp&@I[?G' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
