#!/bin/bash

python3 -m venv findmeaseries_venv
. findmeaseries_venv/bin/activate
pip3 install pandas matplotlib numpy nltk scikit-learn gensim spacy wordcloud pyLDAvis NLP-python

# requirements: python/pip installed
