DROP TABLE `myTable`;

CREATE TABLE `myTable` (
  `id` mediumint(8) unsigned NOT NULL auto_increment,
  `cart_id` mediumint,
  `cartName` varchar(255) default NULL,
  `cartAddress` varchar(255) default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;

INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (1,"Kieran","933-4990 Et, Avenue"),(2,"Wayne","Ap #302-9618 Id, Street"),(3,"Abel","P.O. Box 197, 1127 Pede. Avenue"),(4,"Tatiana","P.O. Box 354, 6214 Aliquam Rd."),(5,"Abigail","Ap #395-9008 Mollis St."),(6,"Mohammad","Ap #403-9832 Eleifend Rd."),(7,"Davis","163-9307 Vestibulum Street"),(8,"Lucy","P.O. Box 600, 4710 Nec, Road"),(9,"Cody","Ap #560-931 Arcu. Rd."),(10,"Gavin","P.O. Box 178, 6396 Magna. Av.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (11,"Gavin","8793 Dolor, Street"),(12,"Erin","P.O. Box 382, 9674 Curabitur Ave"),(13,"Noelani","P.O. Box 760, 836 Dui. Ave"),(14,"Pandora","Ap #808-9873 Elit, Street"),(15,"Linus","Ap #348-9365 Dis Av."),(16,"Indira","Ap #989-3037 Consectetuer Av."),(17,"Melissa","5692 Interdum Av."),(18,"Edward","P.O. Box 100, 7961 Eget St."),(19,"Tashya","P.O. Box 250, 449 Non Street"),(20,"Eaton","P.O. Box 416, 1830 Nulla St.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (21,"Veronica","P.O. Box 146, 9689 Sagittis Street"),(22,"Reuben","347-8551 Congue Road"),(23,"Zelda","264 In Rd."),(24,"Phyllis","342-2141 Gravida. Av."),(25,"Dustin","Ap #983-5474 Etiam Ave"),(26,"Lara","Ap #779-6679 Fringilla Av."),(27,"Armand","788-8935 Posuere, Avenue"),(28,"Barry","Ap #170-1811 Imperdiet Avenue"),(29,"Damian","5939 Purus Av."),(30,"Kenyon","703 Gravida Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (31,"Declan","Ap #187-2787 Tincidunt Rd."),(32,"Marcia","Ap #842-4808 Non, St."),(33,"Gisela","Ap #525-3583 Dui. St."),(34,"Caldwell","P.O. Box 958, 1502 Amet, Avenue"),(35,"Daquan","Ap #275-1652 Metus. Street"),(36,"Patrick","165-4769 Mauris St."),(37,"Bert","551 Eget Street"),(38,"Naomi","Ap #696-4288 Ut Ave"),(39,"Chloe","P.O. Box 972, 4694 Laoreet, Avenue"),(40,"Hoyt","650-221 Varius Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (41,"Maisie","P.O. Box 879, 9247 Enim. Ave"),(42,"Sylvester","4742 Ornare Av."),(43,"Guy","405-3052 Nonummy Street"),(44,"Lester","Ap #815-8215 Neque Av."),(45,"Madeline","P.O. Box 290, 693 Aliquam Av."),(46,"Martin","Ap #764-9210 Risus. Ave"),(47,"Wynter","Ap #284-6702 Suspendisse Street"),(48,"Macaulay","P.O. Box 412, 7792 Cursus Rd."),(49,"Sade","Ap #568-8176 Eget, Street"),(50,"Drew","437-1005 Euismod Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (51,"Kaseem","Ap #466-7055 Vestibulum, St."),(52,"Jonas","5393 Molestie Rd."),(53,"Hop","836 Augue Avenue"),(54,"Oleg","8571 Neque. Road"),(55,"Tanisha","4217 Est St."),(56,"Brian","P.O. Box 207, 8245 Velit. Road"),(57,"Lynn","790-8042 Sit Ave"),(58,"Barrett","1291 Lacinia Road"),(59,"Carson","519-5187 Tristique Rd."),(60,"Jayme","628-2725 Nec, Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (61,"Solomon","9355 Ullamcorper, Avenue"),(62,"Noelle","Ap #801-8635 Ipsum. Street"),(63,"Alyssa","Ap #465-9862 Pede St."),(64,"Nomlanga","P.O. Box 821, 9351 Erat Avenue"),(65,"Piper","P.O. Box 580, 4739 Fermentum Rd."),(66,"Noelle","P.O. Box 623, 2144 Elit, Ave"),(67,"Jessica","1403 Nisl. Road"),(68,"Kim","509-1685 Est Rd."),(69,"Idona","210-6778 Sit Avenue"),(70,"Belle","835-4589 Tincidunt Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (71,"Cedric","972-9906 Molestie Street"),(72,"Adrienne","Ap #901-5785 Lobortis Rd."),(73,"Whitney","9653 Lacus. Av."),(74,"Ruby","Ap #666-3822 Lorem Road"),(75,"Elmo","Ap #992-1122 Est, Rd."),(76,"Chanda","540-7558 Amet St."),(77,"Charlotte","199-946 Nibh Rd."),(78,"Lareina","639-785 Auctor Road"),(79,"Craig","Ap #107-8698 Aenean St."),(80,"Magee","8402 Scelerisque Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (81,"Sylvester","760-863 Tellus St."),(82,"Fallon","2515 Ut Rd."),(83,"Grace","P.O. Box 768, 8899 Faucibus Road"),(84,"Brennan","Ap #575-7555 Enim Road"),(85,"Dean","225-1026 Suscipit Avenue"),(86,"Daria","P.O. Box 768, 1924 Hendrerit St."),(87,"Rana","Ap #936-6331 Adipiscing Rd."),(88,"Fallon","1417 Ligula. St."),(89,"Candice","4906 Facilisis. St."),(90,"Cara","P.O. Box 385, 5402 Sed Rd.");
INSERT INTO `myTable` (`cart_id`,`cartName`,`cartAddress`) VALUES (91,"Nathaniel","Ap #255-106 Nec, Ave"),(92,"Courtney","868-195 Ut St."),(93,"Uriah","1088 Est. St."),(94,"Howard","110-9629 In Ave"),(95,"Mufutau","8935 Tellus Rd."),(96,"Rogan","Ap #419-8279 Sed Road"),(97,"Yuli","Ap #193-8591 Ante Street"),(98,"Reese","673-8812 Integer Rd."),(99,"Ulla","9207 Ultricies Road"),(100,"Vladimir","Ap #316-3714 Cras Avenue");
