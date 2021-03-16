# App de tareas en consola con Node JS

## **Instalación**

> ## Nota importante
> Para poder instalar lo necesario para este proyecto necesitas tener instalado el entorno de ejecución Node JS y NPM para poder instalar las dependencias necesarias para este proyecto. 

### **Descarga del proyecto**

Podemos descargar el proyecto de varias formas. Mediante la descarga del archivo en formato ZIP desde Github o clonando el repositorio completo con el siguiente comando:

```
git clone https://github.com/DavidAlejandro18/node-app-console-task.git
```

### **Instalación de las dependencias**

Ejecutamos el comando `npm i` para instalar todas las dependencias necesarias para su funcionamiento.

## **Uso del programa**

### **¿Cómo iniciar el programa?**

1. Primero nos ubicaremos en la carpeta o espacio donde se descargo el proyecto con cualquier consola (CMD o Terminal).
2. Después podremos iniciar el proyecto con el comando `npm start` o `node app`.

### **¿Cómo crear una nueva tarea?**

1. Cuando hayamos iniciado el programa, seleccionamos la primera opción `Crear tarea`.
2. Después escribimos la descripción de lo que seria nuestra tarea y pulsamos ENTER para guardar la tarea.
3. Finalmente pulsamos otra vez ENTER para continuar.

### **¿Cómo visualizar mis tareas?**

Existen 3 formas de poder visualizar las tareas que esten guardadas:

- Listar todas las tareas.
- Listar las tareas completadas.
- Listar las tareas pendientes.

Dependiendo de la opción que seleccionemos, nos va a mostrar lo que es la lista con las tareas. 

Si seleccionaste la opción de `Todas las tareas` nos aparecera la lista con su número, la tarea en si y su status.

En caso de seleccionar la opción `Tareas completadas` nos mostrara la lista con su número, la tarea en si y la fecha en que fue resuelta esa tarea.

Si quisiste visualizar unicamente las `Tareas pendientes`, se mostrara lo que es la tarea y su status como pendiente.

### **¿Cómo completar mis tareas?**

Para poder completar una tarea, simplemente seleccionamos la opción `Completar tarea(s)`, después nos mostrara todas las tareas, tanto las completadas anteriormente, como las pendientes.

Podremos ver que las tareas completadas anteriormente estan marcadas mientras que las pendientes no. Lo unico que tenemos que hacer es marcar las tareas que querramos con la `barra espaciadora` y presionando ENTER para continuar.

### **¿Cómo borrar una tarea?**

Seleccionamos la opción `Borrar tarea`, después nos mostrara la lista de todas las tareas (tanto las completadas como las pendientes). Damos ENTER a la tarea que querramos y nos preguntara que si estamos seguros de borrar esa tarea, tenemos 2 opciones: `y (YES)` o `n (NO)`, escribimos `y` o **ENTER** simplemente para confirmar y finalmente ENTER para regresar al menú principal.

También podemos salir del menú de eliminar tareas haciendo ENTER a la primera opción para cancelar.

### **¿Cómo salir de la app?**

Podemos salir de la app presionando ENTER a la ultima opción `Salir` y presionando ENTER o con el comando `CTRL + C (Windows)` o `COMMAND + C (Mac OS)`, esta ultima opción no se recomienda ya que podria dañar el archivo donde se guardan las tareas.

## Creditos

Este proyecto pudo ser posible gracias al curso ['Node: De cero a Experto'](https://www.udemy.com/course/node-de-cero-a-experto/) de Fernando Herrera ([@fernando_her85](https://twitter.com/fernando_her85)).