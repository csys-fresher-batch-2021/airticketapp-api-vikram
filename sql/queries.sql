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
	email varchar(30) not null,
	origin varchar(30) not null,
	destiny varchar(30) not null,
	depart_time time,
	arrival_time time,
	price Int not null,
	status varchar(20),
	booked_time timestamp,
	primary key(id, ticket_no)
);