// /frontend/js/jobs.js
async function fetchJobs() {
    const response = await fetch(`${BASE_URL}/jobs`);
    return response.json();
}

async function deleteJob(id) {
    if (!confirm('Are you sure you want to delete this job?')) return;

    await fetch(`${BASE_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Api-Key': API_KEY
        }
    });
    location.reload();
}

async function createJob(data) {
    const response = await fetch(`${BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        alert('Failed to create job.');
    } else {
        alert('Job created!');
        window.location.href = 'index.html';
    }
}

async function updateJob(id, data) {
    const response = await fetch(`${BASE_URL}/jobs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        alert('Failed to update job.');
    } else {
        alert('Job updated!');
        window.location.href = 'index.html';
    }
}

