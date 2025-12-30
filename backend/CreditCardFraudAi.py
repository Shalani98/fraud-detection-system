import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split

from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

import joblib


df=pd.read_csv('creditcard.csv')
print(df.head(10))

x=df[[ 'amount', 'lanka_city', 'merchant_category', 'card_type', 'device_type', 'transaction_time']]
y=df['is_fraud']

x=pd.get_dummies(x,columns=['lanka_city', 'merchant_category', 'card_type', 'device_type', 'transaction_time'])
print("Features:",x)
print("Target:",y)

x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=42)

print("Trained Data:",x_train)
print("Testing Data:",x_test)



####RandomForestClassifier
model=RandomForestClassifier(n_estimators=100,random_state=42)
model.fit(x_train,y_train)

predict=model.predict(x_test)


print("Predictions:",predict)
print("Accuracy:",accuracy_score(y_test,predict))
print("Classification Report:",classification_report(y_test,predict))

## Save the model to a file
joblib.dump(model,"fraud_model.pkl")
print("Model saved to fraud_model.pkl")