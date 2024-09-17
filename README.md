
create table ROTEIRO
(
   id                   BIGINT not null AUTO_INCREMENT,
   IDANALISTA           BIGINT,
   IDREVISOR            BIGINT,
	EMAILCLIENTE                char(255),
   NOMECLIENTE                 char(255),
   TELEFONECLIENTE             char(255),
   TEXTO                char(255),
   DATAENVIO            date,
   OPINIAOANALISTA      char(255),
    REVISAO      char(255),
   primary key (ID)
);

create table ROTEIROAPROVADORES
(
   id                   BIGINT not null AUTO_INCREMENT,
   ID_Roteiro           BIGINT not null,
   ID_Usuario           BIGINT not null,
   primary key (ID)
);

CREATE TABLE `users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) DEFAULT NULL,
  `EMAIL`                char(255),
  `NOME`                 char(255),
  `password` char(255) DEFAULT NULL,
  `account_non_expired` bit(1) DEFAULT NULL,
  `account_non_locked` bit(1) DEFAULT NULL,
  `credentials_non_expired` bit(1) DEFAULT NULL,
  `enabled` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_user_name` (`user_name`)
);

CREATE TABLE permission (
   id BIGINT NOT NULL AUTO_INCREMENT,
   description VARCHAR(255) DEFAULT NULL,
   PRIMARY KEY (id)
) ;
CREATE TABLE user_permission (
  id_user BIGINT NOT NULL,
  id_permission BIGINT NOT NULL,
  PRIMARY KEY (id_user, id_permission),
  KEY fk_user_permission_permission (id_permission),
  CONSTRAINT fk_user_permission FOREIGN KEY (id_user) REFERENCES users (id),
  CONSTRAINT fk_user_permission_permission FOREIGN KEY (id_permission) REFERENCES permission (id)
) ;




alter table ROTEIRO add constraint roteiroUsuario foreign key (IDANALISTA)
      references users (ID) on delete restrict on update restrict;
      
alter table ROTEIRO add constraint FK_RELATIONSHIP_7 foreign key (IDREVISOR)
      references users (ID) on delete restrict on update restrict;

alter table ROTEIROAPROVADORES add constraint FK_RELATIONSHIP_5 foreign key (ID_Usuario)
      references users (ID) on delete restrict on update restrict;

alter table ROTEIROAPROVADORES add constraint FK_RELATIONSHIP_8 foreign key (ID_Roteiro)
      references ROTEIRO (ID) on delete restrict on update restrict;

INSERT INTO permission (description) VALUES
  ('ADMIN'),
  ('ANALISTA'),
  ('REVISOR'),
  ('APROVADOR');

INSERT INTO users (user_name, NOME, EMAIL, password, account_non_expired, account_non_locked, credentials_non_expired, enabled) VALUES
  ('adm', 'adimin','teste@teste.com', '19bbf735b27066f2f145e602624e1b24a3fbc54cd5dfd3143fc5feea6bdee9e139ca7332d4806b9f', 1, 1, 1, 1),
  ('ANALISTA', 'ANALISTA','teste@teste.com', '75ec349c1b0ef4ee7b249d0b83ae4861853f3aa77bce8c4b15f28cd43c6424ab4f29df431831bb0d', 1, 1, 1, 1),
  ('REVISOR', 'REVISOR','teste@teste.com', '75ec349c1b0ef4ee7b249d0b83ae4861853f3aa77bce8c4b15f28cd43c6424ab4f29df431831bb0d', 1, 1, 1, 1),
  ('APROVADOR', 'APROVADOR','teste@teste.com', '75ec349c1b0ef4ee7b249d0b83ae4861853f3aa77bce8c4b15f28cd43c6424ab4f29df431831bb0d', 1, 1, 1, 1);


INSERT INTO user_permission (id_user, id_permission) VALUES 
  (1, 1), 
  (2, 2),
   (3, 3),
    (4, 4);
