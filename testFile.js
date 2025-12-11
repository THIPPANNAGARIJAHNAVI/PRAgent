
API_KEY = "sk-1234567890abcdefghijklmnopqrstuvwxyz"

def calculate_price(items):
    total = 0
    for item in items:
        total += item * 1.2  # VIOLATION: Magic number 1.2 (tax rate)
    return total


def fetch_user_data(user_id):
    try:
        # VIOLATION: Using == instead of is None
        if user_id == None:
            return None
        
        users = []
        for id in range(user_id, user_id + 10):
            user = get_user_from_db(id)  # Simulated database call
            users.append(user)
        
        return users
    except:  
        return []


def process_orders(orders):
    results = []
    for order in orders:
        # Process order items
        items = []
        for item_id in order.items:
            item = get_item(item_id)
            items.append(item)
        
        # Calculate total
        total = 0
        for item in items:
            total += item.price
        
        # Apply discount
        if total > 100:
            total = total * 0.9
        elif total > 50:
            total = total * 0.95
        
        # Add shipping
        if total < 50:
            total += 10
        else:
            total += 5
        
        # Process payment
        payment_result = process_payment(order.payment_method, total)
        
        # Send confirmation
        send_email(order.email, total)
        
        results.append({
            'order_id': order.id,
            'total': total,
            'status': payment_result.status
        })
    
    return results

def validate_input(data):
    if data == None:
        return False
    if data == "":
        return False
    return True

def calc(x, y, z):
    result = x * y + z
    return result

import json
import os
import sys


def get_user_from_db(user_id):
    return {"id": user_id, "name": f"User{user_id}"}

def get_item(item_id):
    return {"id": item_id, "price": 10}

def process_payment(method, amount):
    return {"status": "success"}

def send_email(email, amount):
    pass

