//
//  ViewController.swift
//  SAFextTest
//
//  Created by Wesley de Groot on 23/09/2021.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

        if let url = URL(string: "https://www.wdgwv.com") {
            UIApplication.shared.open(url)
        }
    }


}

