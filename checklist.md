Описание Api:

https://valueonchain.gq/user/login
отдаёт данные о пользователе и в заголовке возвращает твой уникальный токен
заголовок Authorization
этот эндпоинт используем при логине
задача сделать запрос на странице авторизации
если токен отдали - сохраняем в ридакс и впускаем в приложение
(у токена есть срок действия, по истечению отдастся 403 статус, в идеале отследить это и разлогинить пользователя)
Проверяем наличие токена и если его нет в аппке не пускаем внутрь приложения а кидаем на логинку

Для получения реальной инфы по списку сделок (Home page)
https://valueonchain.gq/api/asset

он отдаёт массив из объектов сделок
данные для отображения бери какие считаешь нужными оттуда (это старый дизайн)
там есть всё имя, описание и тд

их нужно тоже засетить в ридакс
чтобы не запрашивать каждый раз
кнопка TRADE NOW ведёт на страницу подробной инфы о сделке
Данные уже есть)
используй динамически параметр в роуте например linearId

Дизайн можно использовать из OneDeal слайда
Тут не нужно соответствовать дизайну тк структура данных сложная
Используй что считаешь нужным

теперь самое интересное, по поводу изображений
они в объекте хранятся в таком виде
"images": [
                    {
                        "fileNameWithExtension": "DryBulk.jpg",
                        "secureHash": "3749EACAE64C65E8D69DB2739DC5F4B83ACE81C3502ED45AFBAE91D244D78DC6"
                    }
                ]

это массив и их может быть много

запрос
https://valueonchain.gq/api/dataroom/getS3FileAttachmentByHashAsLink/3749EACAE64C65E8D69DB2739DC5F4B83ACE81C3502ED45AFBAE91D244D78DC6/DryBulk.jpg

тут в роуте fileNameWithExtension и secureHash

Эта штука отдаёт ссылку которая живёт отколо минуты
Тут сложновато поэтому подсказываю сразу (её нужно получить как блоб и сохранить в ридакс)