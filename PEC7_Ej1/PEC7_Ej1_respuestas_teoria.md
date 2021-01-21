# PEC7_Ej1_respuestas teoria

1. ¿Qué es y cómo funciona el elemento `<RouterOutlet>`?

   `<RouterOutlet>` es una etiqueta especial en Angular que sirve para mostrar los componentes hijos de un componente. Por defecto todos los componentes son hijos del componente AppComponent, por lo que si incluímos esta etiqueta dentro de la vista de AppComponent, se renderizará cada uno de los componentes del routing dependiendo de la página en la que nos encontremos.

   Se imprimirá por consola el valor que aparece en la ruta, es decir, si navegamos a la ruta /items, se sustituirá la etiqieta router-outlet por el componente que esté asignado en ela archivo de rutas para ese componente.

2. ¿Para qué se utilizan las directivas routerLinky routerLinkActive? ¿Existen más directivas relacionadas con el router?
3. ¿Qué diferencias hay entre los servicios Routery ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.
4. ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la documentación oficial de Angular).
5. ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules).
6. ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?
