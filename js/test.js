const source = [
    {
        "name": "系统首页",
        "path": "/home",
    },
    {
        "name": "实时监测",
        "path": "/detectionPage",
    },
    {
        "name": "设备管理",
        "path": "/deviceManagement",
        "routes": [
            {
                "name": "设备列表",
                "path": "/deviceManagement/deviceList",
            },
            {
                "name": "设备参数",
                "path": "/deviceManagement/deviceParams",
            }
        ],
        "subs": 2
    },
    {
        "name": "系统管理",
        "path": "/system",
        "routes": [
            {
                "name": "账号管理",
                "path": "/system/account",
            },
            {
                "name": "角色管理",
                "path": "/system/roleManagement",
            },
            {
                "name": "单位管理",
                "path": "/system/unitManagement",

            },
            {
                "name": "系统设置",
                "path": "/system/systemSet",
            }
        ],
        "subs": 4
    },
    {
        "name": "日志列表",
        "path": "/logPage",
    }
]

const targetData = {
    "/home": "系统首页",
    "/detectionPage": "实时监测",
    "/deviceManagement": "设备管理",
    "/deviceManagement/deviceList": "设备列表",
    "/deviceManagement/deviceParams": "设备参数"
}

function getBreadCrumbsData(source) {
    const breadCrumbsConfig = {};
    function setObjByPathAName(arr) {
        arr.forEach(item => {
            const { name, path, routes } = item;
            if (!breadCrumbsConfig[path]) {
                breadCrumbsConfig[path] = name;
            }
            if (routes) {
                setObjByPathAName(routes);
            }
        });
    }

    setObjByPathAName(source);

    return breadCrumbsConfig;
}

const config = getBreadCrumbsData(source);
console.log(config);