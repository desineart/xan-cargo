const express = require('express');
const getSheetData = require('./getSheetData'); // Убедитесь, что путь к файлу верный
const app = express();

const sheetId = '113xg64Brc1jGgbpJoRCD_9AX4ZxOkTcWNHfjE7HpTKs';
const apiKey = 'AIzaSyDmgGIgw22FOUWvl_dqnHu5w87w58nK5M8';

app.get('/track', async (req, res) => {
    try {
        const trackingCode = req.query.code;
        const data = await getSheetData(sheetId, apiKey);
        const trackingInfo = data.find(row => row[0] === trackingCode);

        if (trackingInfo) {
            res.json({ success: true, data: trackingInfo });
        } else {
            res.json({ success: false, message: 'Груз не найден.' });
        }
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).send('Ошибка на сервере');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
