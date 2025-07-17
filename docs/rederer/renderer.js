fetch('../mock-data/feeders.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('feeder-list');
    data.forEach(feeder => {
      const div = document.createElement('div');
      div.className = 'feeder-card';
      const levelStatus = feeder.feed_level < 30 ? 'status-low' : 'status-ok';
      div.innerHTML = `
        <h2>${feeder.location}</h2>
        <p>Feed Level: <span class="${levelStatus}">${feeder.feed_level}%</span></p>
        <p>Battery: ${feeder.battery}%</p>
        <p>Last Updated: ${new Date(feeder.last_updated).toLocaleString()}</p>
      `;
      container.appendChild(div);
    });
  });
