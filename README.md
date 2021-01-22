# ChatPrinter

## ¿Qué es el chat printer?
Como el nombre dice, es una pagina que muestra tu chat de twitch, fue creado con el objetivo de que muestre todos los mensajes menos los que comienzan con !.

## ¿Y por qué no uso directo el chat de twitch? tampoco son tan molestos los comandos
Exacto, solo que fue pensado para los que juegan juegos como el Kukoro 
https://heynaugames.com/es/kukoro-juegos-interactivos-con-el-chat-de-twitch

Estos juegos usan el chat de twitch como medio de movimiento, por lo que el chat estalla en comandos, impidiendo al streamer leer los mensajes de otros usuarios que no estan interesados en jugar o que quieren comentar cosas al respecto mientras juegan.
Ademas de evitar que el streamer por error vea el movimiento de un jugador y sepa sus movimientos.

## ¿Cómo funciona?
Basicamente tenes que crear y reemplazar los valores del archivo .env por los correspondientes para tu canal.

### Ejemplo de archivo .env
IRC_TOKEN= Token de autorizacion ( se consigue en esta pagina https://twitchapps.com/tmi/)
NICK= Nick del usuario que va a conectarse a tu chat (puede ser tu canal u otro secundario, asegurate que coincida con la IRC_TOKEN que conseguiste de ese canal)
INITIAL_CHANNEL= (El canal en el que va a printear el chat).