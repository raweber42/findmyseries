import sys
import pandas as pd
import numpy as np
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Recommender function
def recommend(input_title, scores_df, df):
    recommended = []
    input_title = input_title.lower()
    df['title'] = df['title'].str.lower()
    index = df[df['title'] == input_title].index[0]
    
    top5_list = list(scores_df.iloc[index].sort_values(ascending = False).iloc[1:6].index)
    for each in top5_list:
        recommended.append(df.iloc[each].title)
    return recommended

def main():
  
  # Read the data
  df = pd.read_csv("/home/dima/dev/findmeaseries/recommender_engine/datasets/netflix_movies_and_shows_1/netflix_titles.csv")

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

  print(recommend(sys.argv[1], similarity_scores, df))
  return recommend(sys.argv[1], similarity_scores, df)

if __name__ == '__main__':
    main()
