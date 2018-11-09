var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should check if video is playable| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "images/00680048-00e4-001a-0056-0035000d00af.png",
        "timestamp": 1540489554327,
        "duration": 13465
    },
    {
        "description": "should check if Menu bar \"Get Ready for Your Cruise\" is displayed | Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/000400f0-0026-00df-006b-00ef005d00ea.png",
        "timestamp": 1540489568313,
        "duration": 0
    },
    {
        "description": "should click on 'Get Ready for Your Cruise'| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00bc0036-00c6-00e8-0066-003900df00d9.png",
        "timestamp": 1540489568317,
        "duration": 0
    },
    {
        "description": "should hover mouse over \"Get Ready for Your Cruise\" to make visible options under it| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00ea00d7-0062-004b-0091-0026001500ef.png",
        "timestamp": 1540489568320,
        "duration": 0
    },
    {
        "description": "should count all the options under link-button \"Get Ready for Your Cruise\"| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/0070003f-00a5-00fb-003d-007a00c500ae.png",
        "timestamp": 1540489568324,
        "duration": 0
    },
    {
        "description": "should check if all options are listed and displayed under \"Get Ready for Your Cruise\" | Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/004e00c5-00e9-00e6-009f-00e40018003a.png",
        "timestamp": 1540489568327,
        "duration": 0
    },
    {
        "description": "should click Prepare for Your Cruise| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/0095006a-003a-00f1-00ec-00ff0088002a.png",
        "timestamp": 1540489568331,
        "duration": 0
    },
    {
        "description": "should check if link for video is clickable,displayed| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00bf0000-0023-00e5-00dc-00af00c70087.png",
        "timestamp": 1540489568334,
        "duration": 0
    },
    {
        "description": "should check name of the video is dispalyed| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/007a0051-00b3-0013-00d5-000d008400fe.png",
        "timestamp": 1540489568340,
        "duration": 0
    },
    {
        "description": "should check if Shore Excursions link is clickable| Menu Bar \"Get Ready for Your Cruise\" on Home page",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00e700a6-001d-0039-008b-00fe00d100ac.png",
        "timestamp": 1540489568347,
        "duration": 0
    },
    {
        "description": "should check if all dropdown boxes are present|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/001300c6-008b-0099-00ea-003c00450076.png",
        "timestamp": 1540489568354,
        "duration": 0
    },
    {
        "description": "should check if all 3 dropdown boxes are displayed|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/0054008e-004a-007d-00fd-00b8004100f2.png",
        "timestamp": 1540489568358,
        "duration": 0
    },
    {
        "description": "should check if all options in Destionation dropdown box are displayed|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/004f00fe-0050-002a-00dc-005900510040.png",
        "timestamp": 1540489568361,
        "duration": 0
    },
    {
        "description": "should check if Search box is functional inside Destionation dropdown box|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00a90068-00ea-007b-0001-00af0055006f.png",
        "timestamp": 1540489568365,
        "duration": 0
    },
    {
        "description": "should check if all options in PORT dropdown box are displayed|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00e700ee-003d-00f1-0096-009f00e60013.png",
        "timestamp": 1540489568368,
        "duration": 0
    },
    {
        "description": "should check if Search box is functional inside Port dropdown box|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/006000e4-00fc-0020-0016-003f00c50065.png",
        "timestamp": 1540489568371,
        "duration": 0
    },
    {
        "description": "should check if all options in ACTIVITY TYPE dropdown box are displayed|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/008d001c-001c-00be-0003-005a00b600be.png",
        "timestamp": 1540489568375,
        "duration": 0
    },
    {
        "description": "should check if Search box is functional inside ACTIVITY TYPE dropdown box|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00a30030-0048-0084-000c-00a700c80055.png",
        "timestamp": 1540489568378,
        "duration": 0
    },
    {
        "description": "should check if FIND EXCURSIONS button is displayed|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/009300c2-00db-0062-00b7-009000820040.png",
        "timestamp": 1540489568382,
        "duration": 0
    },
    {
        "description": "should check if FIND EXCURSIONS button is clickable|Shore Excursions",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 71286,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/00c80088-00d8-0022-0079-002b009a00ff.png",
        "timestamp": 1540489568384,
        "duration": 0
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
