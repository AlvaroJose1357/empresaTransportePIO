create table rutas (
	idrutas SERIAL PRIMARY KEY, 
	estado varchar(30), 
	tiempoestimado int
)

create table estadopedido (
	idestadopedido SERIAL PRIMARY KEY, 
	nombreestadopedido varchar(20) NOT NULL,
	descripcionestadopedido varchar(20) NOT NULL
)

create table rol (
	idrol SERIAL PRIMARY KEY, 
	nombrerol varchar(20) NOT NULL,
	descripcionrol varchar(20) NOT NULL
)

create table usuario (
	idusuario serial primary key,
	nombreusuario varchar(20),
	apellidousuario varchar(20),
	edadusuario varchar(20),
	telefonousuario varchar(20),
	correousuario varchar(20),
	fecharegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	password varchar(200),
	idrol serial, 
	foreign key (idrol) references rol(idrol)
	
)

create table pedido (
	idpedido serial primary key, 
	idusuarioconductor serial, 
	idusuariocliente serial,
	fechaentrega date,
	fechasalida date,
	origen varchar(50),
	destino varchar(50),
	costo float,
	idestadopedido serial,
	fechacreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	detalles varchar(200),
	idrutas serial,
	foreign key (idusuarioconductor) references usuario(idusuario),
	foreign key (idusuariocliente) references usuario(idusuario),
	foreign key (idestadopedido) references estadopedido(idestadopedido),
	foreign key (idrutas) references rutas(idrutas)
);

create table notificaciones (
    idnotificacion SERIAL PRIMARY KEY,
    tiponotificacion varchar(20) NOT NULL,
    mensaje varchar(20) NOT NULL,
	fechaenvionotificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    idusuario serial,
	idpedido serial
    foreign key (idusuario) references usuario(idusuario)
    foreign key (idpedido) references pedido(idpedido)
);

create table vehiculo (
  idvehiculo serial primary key,
  tipovehiculo varchar(20),
  placa varchar(20),
  idusuario serial,
  foreign key (idusuario) references usuario(idusuario)
)