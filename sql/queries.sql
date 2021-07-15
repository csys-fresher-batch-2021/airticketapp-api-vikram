CREATE TABLE flights (
    id serial primary key not null,
    flight_no Int not null,
    airline varchar(20),
    flight_date date,
    origin varchar(50),
    destiny varchar(50),
    depart_time time,
    arrival_time time,
    economy Int not null,
    business Int not null,
    economy_price Int not null,
    business_price Int not null
)

create table ticket (
	id serial not null,
	ticket_no serial not null,
	flight_no int not null,
	airline varchar(30) not null,
	origin varchar(30) not null,
	destiny varchar(30) not null,
	depart_time time not null,
	arrival_time time not null,
	seat_type varchar(20) not null,
	no_of_tickets int not null,
	adult int not null,
	children int not null,
	infant int not null,
	price Int not null,
	booked_time timestamp,
	primary key(id, ticket_no)
);

create table card_payment (
	id serial not null,
	card_name varchar(30) not null,
	card_no int not null,
	expiry_month int not null,
	expiry_year int not null,
	paid_time timestamp,
	primary key(id)
);

create table signup (
	id serial primary key,
	name varchar(30) not null,
	email varchar(30) not null,
	mobileNo bigint not null,
	username varchar(30) not null,
	password varchar(30) not null
);
