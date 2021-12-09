DROP TABLE IF EXISTS public.member CASCADE;

CREATE TABLE member(
    user_id VARCHAR(16) NOT NULL,
    full_name VARCHAR(128) NOT NULL,
    password VARCHAR(16),
    age INTEGER,
    birth_day DATE,
    delete_flag BOOLEAN,
    CONSTRAINT USER_pkey PRIMARY KEY(user_id)
);
