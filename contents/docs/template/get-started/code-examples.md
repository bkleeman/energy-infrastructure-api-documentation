---
---

# Energy Infrastructure API

## Code Examples

## Making HTTP calls with curl
In this example, we will use `curl` set to verbose output to return all coal mines in the United States.
```
curl -v http://127.0.0.1:5000/api/v0.1.0/infrastructure/mines/coal
```
You should receive something along the lines of the following:
```
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          -87.26689999993238, 
          33.68890000006479
        ], 
        "type": "Point"
      }, 
      "properties": {
        "original": {
          "tot_prod": 537429
        }, 
        "required": {
          "legend": "Coal mines", 
          "unit": null, 
          "viz_dim": "tot_prod"
        }, 
        "type": {
          "primary": "mines", 
          "secondary": "coal"
        }
      }, 
      "type": "Feature"
    }, 
    ...
```

## Using the python `requests` library
In this example, we will use Python to get all of the oil wells in the United States
```
>>> import requests
>>> response = requests.get("http://127.0.0.1:5000/api/v0.1.0/infrastructure/wells/oil")
>>> response.json()
```
Your output should be similar to the following:
```
{
  "features": [
    {
      "geometry": {
        "coordinates": [
          -103.4571457, 
          32.7573738
        ], 
        "type": "Point"
      }, 
      "properties": {
        "original": {
          "class": "DC", 
          "lat": 32.7573738, 
          "lon": -103.4571457, 
          "oilgas": "OIL", 
          "zoom": 4
        }, 
        "required": {
          "legend": "Oil wells", 
          "unit": null, 
          "viz_dim": "zoom"
        }, 
        "type": {
          "primary": "wells", 
          "secondary": "oil"
        }
      }, 
      "type": "Feature"
    }, 
```