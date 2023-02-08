CREATE TABLE configuracion(
	id BIGSERIAL PRIMARY KEY,
	usuario VARCHAR(255) NOT NULL UNIQUE,
	capacidadFijo VARCHAR(255) NOT NULL,
	capacidadCorrido VARCHAR(255) NOT NULL,
	capacidadParlet VARCHAR(255) NOT NULL,
	capacidadCentena VARCHAR(255) NOT NULL,
	pagoFijo VARCHAR(255) NOT NULL,
	pagoCorrido VARCHAR(255) NOT NULL,
	pagoParlet VARCHAR(255) NOT NULL,
	pagoCentena VARCHAR(255) NOT NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL,
);