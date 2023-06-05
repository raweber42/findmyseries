import pandas as pd

# Read the data
print("Prepare dataset...")
df = pd.read_csv("./datasets/tmdb/movies.csv") # NEW DATASET

df = df[df.popularity > 7]

df.to_csv('./datasets/tmdb/filtered_movies.csv', index=False)
