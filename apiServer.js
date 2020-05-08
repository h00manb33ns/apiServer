
const http = require('http');
const url = require('url');
const port = 6006;

const requestHandler = (request, response) => {

    const query = url.parse(request.url, true).query;

    if (query && query.count && (query.count > 0)) {

        let apiObjects = {

         "events":[{
             "ItemName":"Кружка",
             "ItemAbout":"С этой кружкой каждое утро будет бодрым, а настроение в течении всего дня - прекрасным! Кружка выполнена из прочного костяного фарфора и имеет удобную ручку.",
			 "ItemPrice":"299 Руб.",
			 "ItemImage":"ItemImages/Кружка",
             "Item3D_model":"1",
             "ItemCatalogID":"1"

         },{
             "ItemName":"Стакан",
             "ItemAbout":"Стакан, приятный на вид.",
			 "ItemPrice":"449 Руб.",
			 "ItemImage":"ItemImages/Стакан",
			 "Item3D_model":"2",
             "ItemCatalogID":"1"
         },{
             "ItemName":"Бокал",
             "ItemAbout":"Бокал для вина, используется чтобы пить.",
			 "ItemPrice":"399 Руб.",
			 "ItemImage":"ItemImages/Бокал",
			 "Item3D_model":"2",
             "ItemCatalogID":"1"
         },{
             "ItemName":"Тарелка",
             "ItemAbout":"Тарелка, для того, чтобы разбавить трапезу и не есть со стола!",
			 "ItemPrice":"199 Руб.",
			 "ItemImage":"ItemImages/Тарелка",
			 "Item3D_model":"2",
             "ItemCatalogID":"1"
         },{
            "ItemName":"Настольная лампа",
            "ItemAbout":"Настольная лампа с регулируемым мундштуком.",
            "ItemPrice":"999 Руб.",
            "ItemImage":"ItemImages/НастольнаяЛампа",
            "Item3D_model":"2",
            "ItemCatalogID":"2"
        },{
            "ItemName":"Тостер",
            "ItemAbout":"Тостер для приготовления ВКУСНЕЙШИХ тостов.",
            "ItemPrice":"1999 Руб.",
            "ItemImage":"ItemImages/Тостер",
            "Item3D_model":"2",
            "ItemCatalogID":"2"
        },{
            "ItemName":"Калькулятор",
            "ItemAbout":"Калькулятор, используемый для сложных вычисление",
            "ItemPrice":"499 Руб.",
            "ItemImage":"ItemImages/Калькулятор",
            "Item3D_model":"2",
            "ItemCatalogID":"2"
        },{
            "ItemName":"Стиральная машина",
            "ItemAbout":"Стиральная машина для стирки вещей, 6кг, много оборотов, надо подключить к питанию.",
            "ItemPrice":"8999 Руб.",
            "ItemImage":"ItemImages/СтиральнаяМашина",
            "Item3D_model":"2",
            "ItemCatalogID":"2"
        },{
            "ItemName":"Стул",
            "ItemAbout":"Стул, для того чтобы удобно размещаться в помещении.",
            "ItemPrice":"799 Руб.",
            "ItemImage":"ItemImages/Стул",
            "Item3D_model":"2",
            "ItemCatalogID":"3"
        },{
            "ItemName":"Диван",
            "ItemAbout":"Удобный диван, раскладывается, если придут в гости - может превратиться в отличное место для ночевки.",
            "ItemPrice":"4999 Руб.",
            "ItemImage":"ItemImages/Диван",
            "Item3D_model":"2",
            "ItemCatalogID":"3"
        },{
            "ItemName":"Книжная полка",
            "ItemAbout":"Если вы любитель почитать, а места под книги нет - приобритайте.",
            "ItemPrice":"1999 Руб.",
            "ItemImage":"ItemImages/КнижнаяПолка",
            "Item3D_model":"2",
            "ItemCatalogID":"3"
        },{
            "ItemName":"Цветочный горшок",
            "ItemAbout":"Горшок для цветов. Просто, минималистично, гениально.",
            "ItemPrice":"499 Руб.",
            "ItemImage":"ItemImages/ЦветочныйГоршок",
            "Item3D_model":"2",
            "ItemCatalogID":"3"
        },{
            "ItemName":"Солдатики",
            "ItemAbout":"Все мальчики любят войнушку. Солдатики - идеальный вариант для этого.",
            "ItemPrice":"299 Руб.",
            "ItemImage":"ItemImages/Солдатики",
            "Item3D_model":"2",
            "ItemCatalogID":"4"
        },{
            "ItemName":"Мишка Тедди",
            "ItemAbout":"Плюшевая игрушка мишки подойдет как подарок для девушки и как подарок для ребенка!",
            "ItemPrice":"499 Руб.",
            "ItemImage":"ItemImages/МишкаТедди",
            "Item3D_model":"2",
            "ItemCatalogID":"4"
        },{
            "ItemName":"Набор LEGO маленький",
            "ItemAbout":"Собери из набора лего коллекционный спидер из звездных воин!",
            "ItemPrice":"999 Руб.",
            "ItemImage":"ItemImages/Лего",
            "Item3D_model":"2",
            "ItemCatalogID":"4"
        },{
            "ItemName":"Деревянные игрушки",
            "ItemAbout":"Деревянные игрушки для детей, поезда всякие, пирамидка.",
            "ItemPrice":"199 Руб.",
            "ItemImage":"ItemImages/ДеревянныеИгрушки",
            "Item3D_model":"2",
            "ItemCatalogID":"4"
        }]
     };

        let limit = query.count;
        if (limit > apiObjects.length) {
            limit = apiObjects.length;
        }

        //apiObjects = apiObjects.slice(0, limit);
        response.end(JSON.stringify(apiObjects));

    } else {

        response.writeHead(404);
        response.end("Not Found");
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {

    if (err) {
        return console.log(`Internal Server Error: ${err}`);
    }

    console.log(`Listening on port: ${port}`);
});