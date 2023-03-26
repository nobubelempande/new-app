export async function createFlight(data) {
    const response = await fetch("http://localhost:8202/flights", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

