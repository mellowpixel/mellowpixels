<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mellowpixels_wp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1<ugirL<JNt4`CWV]dKG`?-<Y(E%i]kHh3r;m5-,98;42W:H+jo&2Q|Kh[IInai:');
define('SECURE_AUTH_KEY',  'Swo006Pk).g_QTMngwvR]ImpNHe*NV51DcMm^dc66ULqk=U%XfE|%~1~B$s#dw`(');
define('LOGGED_IN_KEY',    '?lR(Gu-3%EWSm/mi!=(b1@f9|g)vP^oT>}( }y_XufU$G~5R0 !5TPbl_RguiG~^');
define('NONCE_KEY',        'nw(yeiB;_K:*hWB@Cwy`Xqku,NBshF#(uf8B^dfghQF4$sF7eHvW_LjLI|f(TQY9');
define('AUTH_SALT',        'N& D+;m(OyIs]McWZDjV*tB.+lL8Y|bK-3<2:MZhK(?)=+qv.?#IErmV_jZ1obyO');
define('SECURE_AUTH_SALT', 'R?3r.&7nZ0dkj@<zDJQ)L0(k.v&OXT{2MjQVZQxS9x5P B-@@KT|H2Zq#Ts~,T{{');
define('LOGGED_IN_SALT',   'i>9&73<@?z4*YR>t(+%y~s*ABSGdEJ?BlqH5m8A[XZ&CP6<j/,#(| _&c/PN1fkV');
define('NONCE_SALT',       'z2[:%#{8`Hd[Ryq`&Y^QDVvgZ=~VWnoHE>qb;>J]J$K+vT.s1:Z1;!~a`>0?F!#!');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
