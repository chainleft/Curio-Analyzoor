from datetime import datetime,timedelta
import pandas as pd
import numpy as np
import csv
import requests
import json

import asyncio
from pandas import ExcelWriter

opensea_url = "https://api.opensea.io/collection/curiocardswrapper?format=json"
opensea_url = "https://api.opensea.io/api/v1/assets?collection=curiocardswrapper&format=json"

def pullOpenSea():
	names = list()
	token_ids = list()
	floors = list()
	lastsales = list()
	for i in range(30):
		opensea_url = "https://api.opensea.io/api/v1/assets?token_ids="+str(i+1)+"&order_direction=desc&offset=0&limit=20&collection=curiocardswrapper"
		response = requests.request("GET", opensea_url)
		response_json = response.json()
		names.append(response_json['assets'][0]['name'])
		token_ids.append(response_json['assets'][0]['token_id'])
		floors.append(float(response_json['assets'][0]['sell_orders'][0]['current_price'])/1000000000000000000)
		lastsales.append(float(response_json['assets'][0]['last_sale']['total_price'])/1000000000000000000)
	curio_prices = pd.DataFrame({'token_id': token_ids,'Name': names,'Floor': floors,'Last Sale Price':lastsales})
	curio_prices['token_id'] = curio_prices['token_id'].astype(int)
	return curio_prices

def pullDataAndMerge(curio_prices):
	curiocards = pd.read_csv('~/Documents/CurioCards/curiocards.csv')
	curio_merged = pd.merge(curio_prices,curiocards,on='token_id')
	curio_merged['Real Floor Mcap'] = curio_merged['Real Supply']*curio_merged['Floor']
	curio_merged['Wrapped Floor Mcap'] = curio_merged['Wrapped Supply']*curio_merged['Floor']
	curio_merged['Real Sale Mcap'] = curio_merged['Real Supply']*curio_merged['Last Sale Price']
	curio_merged['Wrapped Sale Mcap'] = curio_merged['Real Supply']*curio_merged['Last Sale Price']
	curio_merged.drop(['Real Sale Mcap','Wrapped Sale Mcap'], axis=1, inplace=True)
	curio_merged = curio_merged.sort_values(by=['Real Floor Mcap'])
	curio_merged.rename(columns={'token_id': 'Card No'}, inplace=True)
	return curio_merged

def curioAnalyze():
	curio_prices = pullOpenSea()
	curio_merged = pullDataAndMerge(curio_prices)
	return curio_merged

curioAnalyze()
curio_merged = curioAnalyze()
curio_merged.to_csv('~/Documents/CurioCards/curio_analyzoor.csv')


curio_merged[curio_merged['price']<1.2]
