document.getElementById('fetchMessage').onclick = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    document.getElementById('responseMessage').innerText = data.message;
};

document.getElementById('sendData').onclick = async () => {
    const inputData = document.getElementById('dataInput').value;
    try {
        const response = await fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: inputData,
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('response').innerText = 'Datos recibidos: ' + JSON.stringify(result.received);
        } else {
            document.getElementById('response').innerText = 'Error al enviar los datos';
        }
    } catch (error) {
        document.getElementById('response').innerText = 'Error de conexión';
    }
};
