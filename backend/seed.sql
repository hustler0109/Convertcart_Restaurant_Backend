INSERT INTO restaurants (name, city) VALUES
('Hyderabadi Spice House', 'Hyderabad'),
('Red Chillies Dhaba', 'Bangalore'),
('Biryani Express', 'Hyderabad'),
('Paradise Biryani', 'Chennai'),
('Bawarchi', 'Hyderabad');

INSERT INTO menu_items (restaurant_id, name, price) VALUES
(1, 'Chicken Biryani', 220),
(2, 'Chicken Biryani', 180),
(3, 'Veg Biryani', 150),
(4, 'Mutton Biryani', 300),
(5, 'Chicken Biryani', 260);

INSERT INTO orders (menu_item_id) VALUES
(1),(1),(1),(1),
(2),(2),
(3),(3),(3),
(5),(5),(5),(5),(5),(5);
