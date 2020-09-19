CREATE DATABASE burgers_db;

Use burgers_db;

CREATE Table burgers(
    item_id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY(item_id)
);

