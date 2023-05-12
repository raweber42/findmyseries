import os.path
import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
import numpy as np
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from .train import train_model
from flask import jsonify

# Recommender function
def get_top_three(input_title, scores_df, df):
    recommended = []
    input_title = input_title.lower()
    df['title'] = df['title'].str.lower()
    index = df[df['title'] == input_title].index[0]
    
    top3_list = list(scores_df.iloc[index].sort_values(ascending = False).iloc[1:4].index)
    for each in top3_list:
        recommended.append(
          # df.iloc[each].title
          {
            "title": df.iloc[each].title,
            "id": f"{df.iloc[each].id}",
            "poster_path": df.iloc[each].poster_path
          }
        )
    return recommended

def recommend(input_movie): # NEW DATASET
  
  # Read the data
  df = pd.read_csv("./datasets/tmdb/selected_movies.csv")

  if not os.path.exists('/models/similarity_scores.parquet'):
    train_model()
  similarity_scores = pd.read_parquet('/models/similarity_scores.parquet', engine='pyarrow')

  print("Top three are: ")
  print(get_top_three(input_movie, similarity_scores, df))
  return get_top_three(input_movie, similarity_scores, df)


# def recommend(input_movie):
  
#   # Read the data
#   df = pd.read_csv("./datasets/netflix_movies_and_shows_1/netflix_titles.csv")

#   if not os.path.exists('/models/similarity_scores.parquet'):
#     train_model()
#   similarity_scores = pd.read_parquet('/models/similarity_scores.parquet', engine='pyarrow')

#   print("Top three are: ")
#   print(get_top_three(input_movie, similarity_scores, df))
#   return get_top_three(input_movie, similarity_scores, df)


from flask import Blueprint, request, json

bp = Blueprint('recommend', __name__)

@bp.route('/recommend', methods=['GET'])
def recommend_movies():
  args = request.args
  # print("in recommendation-api: ")
  # print(args['movie'])
  recommendation = recommend(args['movie'])
  # print(recommendation)
  return jsonify(recommendation)

if __name__ == '__main__':
    api.run(debug=True)
