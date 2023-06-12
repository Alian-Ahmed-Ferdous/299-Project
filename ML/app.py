from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
import pickle

# laoding models
df = pickle.load(open('df.pkl','rb'))
similarity = pickle.load(open('similarity.pkl','rb'))


def recommendation(song_df):
    idx = df[df['name'] == song_df].index[0]
    distances = sorted(list(enumerate(similarity[idx])), reverse=True, key=lambda x: x[1])

    songs = []
    for m_id in distances[1:6]:
        songs.append(df.iloc[m_id[0]]['name'])

    return songs


app = Flask(__name__)


@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()  # Get JSON data from the request

    song = data['song']  # Assuming the song is included in the 'song' field of the JSON data

    recommended_songs = recommendation(song)  # Process the data using the recommendation function

    # Prepare the response JSON
    response = {
        'message': 'Success',
        'recommended_songs': recommended_songs
    }

    return jsonify(response)  # Send the JSON response


if __name__ == '__main__':
    app.run()
