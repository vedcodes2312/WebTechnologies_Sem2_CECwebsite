<?php
$stocks = array(
    array("name" => "Sensex", "price" => "73,420", "change" => "+0.65%"),
    array("name" => "Nifty 50", "price" => "22,450", "change" => "+0.59%"),
    array("name" => "Reliance Industries", "price" => "2,780", "change" => "+0.34%"),
    array("name" => "HDFC Bank", "price" => "1,590", "change" => "-0.20%"),
    array("name" => "Tata Consultancy Services (TCS)", "price" => "3,950", "change" => "+1.10%"),
    array("name" => "Infosys", "price" => "1,450", "change" => "-0.15%"),
    array("name" => "ICICI Bank", "price" => "980", "change" => "+0.22%"),
    array("name" => "State Bank of India (SBI)", "price" => "620", "change" => "+0.40%"),
    array("name" => "Bharti Airtel", "price" => "1,320", "change" => "+0.70%"),
    array("name" => "Adani Green Energy", "price" => "1,150", "change" => "-1.20%")
);

header('Content-Type: application/json');
echo json_encode($stocks);
?>