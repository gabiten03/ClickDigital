# 1. Definición de una Función
# Esta función recibe un nombre y un año de nacimiento, y calcula la edad.
def saludar_y_calcular_edad(nombre, anio_nacimiento):
    anio_actual = 2026
    edad = anio_actual - anio_nacimiento
    
    mensaje = f"Hola {nombre}, según mis cálculos tienes (o cumplirás) {edad} años."
    return mensaje

# 2. Entrada de Datos (Input)
# Pedimos información al usuario a través de la terminal
print("--- BIENVENIDO A MI PROGRAMA EN PYTHON ---")
nombre_usuario = input("¿Cómo te llamas? ")
anio_usuario = int(input("¿En qué año naciste? ")) # Convertimos a entero con int()

# 3. Llamada a la Función
# Guardamos lo que la función nos devuelve en una variable
resultado = saludar_y_calcular_edad(nombre_usuario, anio_usuario)

# 4. Uso de Condicionales (If/Else)
print(resultado)

if anio_usuario < 2000:
    print("Eres del siglo pasado, ¡toda una leyenda!")
else:
    print("Eres un nativo digital del siglo XXI.")

# 5. Un bucle simple (Ciclo For)
print("\nContando hasta 3 para despedirme:")
for i in range(1, 4):
    print(f"Número... {i}")

print("¡Proceso terminado!")