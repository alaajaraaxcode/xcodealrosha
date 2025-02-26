import frappe
from datetime import datetime
import locale

@frappe.whitelist(allow_guest = True)
def get_day(sn):
    return (sn.strftime('%A'))

@frappe.whitelist(allow_guest = True)
def get_arabic_day(sn):
    locale.setlocale(locale.LC_TIME, 'ar_EG.UTF-8')
    return (sn.strftime('%A'))




