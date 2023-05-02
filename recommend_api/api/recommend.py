import pandas as pd
import numpy as np
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Recommender function
def get_top_three(input_title, scores_df, df):
    recommended = []
    input_title = input_title.lower()
    df['title'] = df['title'].str.lower()
    index = df[df['title'] == input_title].index[0]
    
    top3_list = list(scores_df.iloc[index].sort_values(ascending = False).iloc[1:4].index)
    for each in top3_list:
        recommended.append(df.iloc[each].title)
    return recommended

def recommend(input_movie):
  
  # Read the data
  df = pd.read_csv("./datasets/netflix_movies_and_shows_1/netflix_titles.csv")

  # Build a column of combined values from the relevant columns
  relevant_cols = ['type', 'title', 'director', 'cast', 'rating', 'listed_in', 'description']
  df['combined'] = df[relevant_cols].apply(lambda row: ' '.join(row.values.astype(str)), axis=1)

  # Convert all words to lowercase and remove stop words
  documents = df['combined']
  count_vectorizer = CountVectorizer(stop_words='english')
  sparse_matrix = count_vectorizer.fit_transform(documents)

  # Compute similarity score between each document
  similarity_scores = cosine_similarity(sparse_matrix, sparse_matrix)
  similarity_scores = pd.DataFrame(similarity_scores)

  print(get_top_three(input_movie, similarity_scores, df))
  return get_top_three(input_movie, similarity_scores, df)


from flask import Blueprint, request, json

bp = Blueprint('recommend', __name__)

@bp.route('/recommend', methods=['GET'])
def recommend_movies():
  args = request.args
  print("in recommendation-api: ")
  print(args)
  recommendation = recommend(args['movie'])
  print(recommendation)
  return recommendation

if __name__ == '__main__':
    api.run(debug=True)
