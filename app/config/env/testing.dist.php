<?php
/**
 * Created by PhpStorm.
 * User: joseph
 * Date: 16/3/23
 * Time: 上午12:21
 */
error_reporting(E_ALL);
ini_set( 'display_errors', 'On' );
if(PHP_SAPI != 'cli'){


    if(($save_handler == "Redis" || $save_handler == "Memcached") && class_exists($save_handler)){
        ini_set("session.save_handler",$save_handler);
        ini_set("session.save_path",$save_path);
    }
    //ini_set('session.name', "jid_001");
    #30天过期 单位:秒
    ini_set('session.gc_maxlifetime', 2592000);
    #过期后清除概率 gc_probability / gc_divisor : 1/1000
    ini_set('session.gc_probability', 1);
    ini_set('session.gc_divisor', 1000);
}

PtPHP\Logger::init(array(
    'level' => 'DEBUG', // none/off|(LEVEL)
    'files' => array( // ALL|(LEVEL)
        'ALL'	=> PATH_PRO.'/logs/'.date("Y-m-d").'.log',
    ),
));



Model_Wechat_Api::$config['appid'] = '';
Model_Wechat_Api::$config['appsecret'] = '';

Model_Wechat_Api::$config_open['appid'] = '';
Model_Wechat_Api::$config_open['appsecret'] = '';
