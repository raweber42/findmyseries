# findmeaseries.com
My first big personal project. </br> </br>
findmeaseries.com will be a series/tv show recommendation engine running on the power of machine learning and neural networks.
*The mission of this project is to build an application through which a user can find a series that he/she will enjoy a lot. The main goals are to reduce searching time for a new series that gets the user hooked and make the search platform-independent (opposed to Netflix&Co).* </br></br>
In the best case would be to build a profitable business out of the recommendation engine, let's see where we get with this ;)


## Installation
Run the install script `./install.sh` in order to create a virtual environment and install the necessary python packages in there. Keep in mind that you have to have python3 and pip3 installed for this to work.

After that, run `source findmeaseries_venv/bin/activate` to activate the virtual environment (and simply `deactivate` to deactivate it later).

In order to use the virtual environment in your jupyter notebook, simply run `pip3 install --user ipykernel` (note: you possibly have to change the line `include-system-site-packages = false` in `recommender_venv/pyvenv.cfg` to `true`) and after that `python3 -m ipykernel install --user --name=findmeaseries_venv`. Now you can select the virtual environment as a kernel inside of jupyter notebook.