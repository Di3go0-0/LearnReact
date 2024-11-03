# Que es un Context en React?

- un Context en React es una herramienta que nos permite pasar datos a traves de la jerarquia de componentes sin tener que pasar props manualmente en cada nivel.

## Cuando podemos usar un Context?

- cuando tenemos datos que queremos que esten disponibles para muchos componentes a diferentes niveles de la jerarquia de componentes.

## Cuando deberiamos usar un Context?

- Cuando queremos compartir informacion entre componentes herrmanos

> [!NOTE]
>
> ### Cuando no debemos usar un Context?
>
> - Cuando vamos a compartir informacion de compoenentes padre a sus hijso
>
> ### Que debemos usar cuando queermos pasar informacion de padre a hijo?
>
> - Lo que debemos usar para compartir informacion de padre a hijo es `Composition-Pattern`

## Que otras soluciones hay para compartir informacion de forrma global?

- Redux
- MobX
- Recoil

### De que depende el usar uno u otro?

- Depende de la complejidad de la aplicacion y de la cantidad de informacion que se va a compartir.
