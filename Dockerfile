# Usa una imagen oficial de Python como base
FROM python:3.10-slim

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de requerimientos al contenedor
COPY requirements.txt .

# Instala las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Copia el código de la aplicación al contenedor
COPY . .

# Expone el puerto 5000 para que puedas acceder a la aplicación
EXPOSE 5000

# Define el comando para ejecutar tu aplicación Flask
CMD ["python", "src/app.py"]
