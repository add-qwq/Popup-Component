<?php
// 设置响应头
header('Content-Type: application/json; charset=utf-8');

// 配置项（根据实际路径调整）
$jsonFilePath = __DIR__ . '/popups.json';

try {
    // 检查文件是否存在
    if (!file_exists($jsonFilePath)) {
        throw new Exception("JSON文件不存在");
    }
    
    // 读取文件内容
    $jsonContent = file_get_contents($jsonFilePath);
    if ($jsonContent === false) {
        throw new Exception("无法读取JSON文件");
    }
    
    // 解析JSON
    $data = json_decode($jsonContent, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("JSON格式错误: " . json_last_error_msg());
    }

    // 返回成功数据
    echo json_encode([
        'code' => 200,
        'data' => $data
    ]);
} catch (Exception $e) {
    // 返回错误信息
    http_response_code(500);
    echo json_encode([
        'code' => 500,
        'error' => $e->getMessage()
    ]);
}
    