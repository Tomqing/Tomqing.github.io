<?php
$type=$_GET["type"];
$ary=array(array('id'=>1,'name'=>'baby bandana bib','img'=>'images/1.jpg','url'=>'detail.html?id=1'),array('id'=>2,'name'=>'baby bandana bib','img'=>'images/2.jpg','url'=>'detail.html?id=2'),array('id'=>3,'name'=>'baby bandana bib','img'=>'images/3.jpg','url'=>'detail.html?id=3'),array('id'=>4,'name'=>'baby bandana bib','img'=>'images/4.jpg','url'=>'detail.html?id=4'),array('id'=>5,'name'=>'baby bandana bib','img'=>'images/5.jpg','url'=>'detail.html?id=5'),array('id'=>6,'name'=>'baby bandana bib','img'=>'images/6.jpg','url'=>'detail.html?id=6'),array('id'=>7,'name'=>'baby bandana bib','img'=>'images/7.jpg','url'=>'detail.html?id=7'),array('id'=>8,'name'=>'baby bandana bib','img'=>'images/8.jpg','url'=>'detail.html?id=8'),array('id'=>9,'name'=>'baby bandana bib','img'=>'images/9.jpg','url'=>'detail.html?id=9'),array('id'=>10,'name'=>'baby bandana bib','img'=>'images/10.jpg','url'=>'detail.html?id=10'),array('id'=>11,'name'=>'baby bandana bib','img'=>'images/11.jpg','url'=>'detail.html?id=11'),array('id'=>12,'name'=>'baby bandana bib','img'=>'images/12.jpg','url'=>'detail.html?id=12'),array('id'=>13,'name'=>'baby bandana bib','img'=>'images/13.jpg','url'=>'detail.html?id=13'),array('id'=>14,'name'=>'baby bandana bib','img'=>'images/14.jpg','url'=>'detail.html?id=14'));
if($type==1){
$id = $_GET["id"];
 echo json_encode($ary[$id]);
}else{
 print_r(json_encode($ary));
}
?>

