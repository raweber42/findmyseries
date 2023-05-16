import pandas as pd
import pyarrow as pa
import pyarrow.parquet as pq
import numpy as np
import nltk
import re
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def train_model():
  # Read the data
  print("Training model...")
  df = pd.read_csv("./datasets/tmdb/selected_movies.csv") # NEW DATASET
  # df = pd.read_csv("./datasets/netflix_movies_and_shows_1/netflix_titles.csv") # OLD DATASET

  # Build a column of combined values from the relevant columns
  relevant_cols = ['title', 'overview', 'tagline', 'keywords'] # NEW DATASET -> TEST MORE OPTIONS LATER
  # relevant_cols = ['type', 'title', 'director', 'cast', 'rating', 'listed_in', 'description'] # OLD DATASET
  df['combined'] = df[relevant_cols].apply(lambda row: ' '.join(row.values.astype(str)), axis=1)

  # Convert all words to lowercase and remove stop words
  documents = df['combined']
  count_vectorizer = CountVectorizer(stop_words='english')
  sparse_matrix = count_vectorizer.fit_transform(documents)

  # Compute similarity score between each document
  similarity_scores = cosine_similarity(sparse_matrix, sparse_matrix)
  similarity_scores = pd.DataFrame(similarity_scores)
  parquet_table = pa.Table.from_pandas(similarity_scores)
  pq.write_table(parquet_table, '/models/similarity_scores.parquet')
  print("Saving model...")
