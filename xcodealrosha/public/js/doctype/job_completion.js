frappe.ui.form.on("Job Completion", "refresh", function(frm) {
    frm.set_query("po", function() {
		return {
			filters: {
                "docstatus":1
			}
		}
	});
    frm.set_query("si", function() {
		return {
			filters: {
				"customer": frm.doc.customer,
                "docstatus":1
			}
		}
	});
    frm.set_query("qu", function() {
		return {
			filters: {
				"quotation_to": "Customer",
                "party_name": frm.doc.customer,
                "docstatus":1
			}
		}
	});
});