/*
 * Copyright (c) 2016 Mountainstorm
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


SddlAceTypes = {
    'A': 'ACCESS_ALLOWED_ACE_TYPE',
    'D': 'ACCESS_DENIED_ACE_TYPE',
    'OA': 'ACCESS_ALLOWED_OBJECT_ACE_TYPE',
    'OD': 'ACCESS_DENIED_OBJECT_ACE_TYPE',
    'AU': 'SYSTEM_AUDIT_ACE_TYPE',
    'AL': 'SYSTEM_ALARM_ACE_TYPE',
    'OU': 'SYSTEM_AUDIT_OBJECT_ACE_TYPE',
    'OL': 'SYSTEM_ALARM_OBJECT_ACE_TYPE',
    'ML': 'SYSTEM_MANDATORY_LABEL_ACE_TYPE',
    'XA': 'ACCESS_ALLOWED_CALLBACK_ACE_TYPE',
    'XD': 'ACCESS_DENIED_CALLBACK_ACE_TYPE',
    'RA': 'SYSTEM_RESOURCE_ATTRIBUTE_ACE_TYPE',
    'SP': 'SYSTEM_SCOPED_POLICY_ID_ACE_TYPE',
    'XU': 'SYSTEM_AUDIT_CALLBACK_ACE_TYPE',
    'ZA': 'ACCESS_ALLOWED_CALLBACK_ACE_TYPE'
}

SddlAceFlags = {
    'CI': 'CONTAINER_INHERIT_ACE',
    'OI': 'OBJECT_INHERIT_ACE',
    'NP': 'NO_PROPAGATE_INHERIT_ACE',
    'IO': 'INHERIT_ONLY_ACE',
    'ID': 'INHERITED_ACE',
    'SA': 'SUCCESSFUL_ACCESS_ACE_FLAG',
    'FA': 'FAILED_ACCESS_ACE_FLAG'
}

SddlAceRights = {
    // Generic access rights
    'GA': 'GENERIC_ALL',
    'GR': 'GENERIC_READ',
    'GW': 'GENERIC_WRITE',
    'GX': 'GENERIC_EXECUTE',
    // Standard access rights
    'RC': 'READ_CONTROL',
    'SD': 'DELETE',
    'WD': 'WRITE_DAC',
    'WO': 'WRITE_OWNER',
    // Directory service object access rights
    'RP': 'ADS_RIGHT_DS_READ_PROP',
    'WP': 'ADS_RIGHT_DS_WRITE_PROP',
    'CC': 'ADS_RIGHT_DS_CREATE_CHILD',
    'DC': 'ADS_RIGHT_DS_DELETE_CHILD',
    'LC': 'ADS_RIGHT_ACTRL_DS_LIST',
    'SW': 'ADS_RIGHT_DS_SELF',
    'LO': 'ADS_RIGHT_DS_LIST_OBJECT',
    'DT': 'ADS_RIGHT_DS_DELETE_TREE',
    'CR': 'ADS_RIGHT_DS_CONTROL_ACCESS',
    // File access rights
    'FA': 'FILE_ALL_ACCESS',
    'FR': 'FILE_GENERIC_READ',
    'FW': 'FILE_GENERIC_WRITE',
    'FX': 'FILE_GENERIC_EXECUTE',
    // Registry key access rights
    'KA': 'KEY_ALL_ACCESS',
    'KR': 'KEY_READ',
    'KW': 'KEY_WRITE',
    'KX': 'KEY_EXECUTE',
    // Mandatory label rights
    'NR': 'SYSTEM_MANDATORY_LABEL_NO_READ_UP',
    'NW': 'SYSTEM_MANDATORY_LABEL_NO_WRITE_UP',
    'NX': 'SYSTEM_MANDATORY_LABEL_NO_EXECUTE'
}

SddlDaclFlags = {
    'P': 'SE_DACL_PROTECTED',
    'AR': 'SE_DACL_AUTO_INHERIT_REQ ',
    'AI': 'SE_DACL_AUTO_INHERITED ',
    'NO_ACCESS_CONTROL': 'NULL_ACL'
}

SddlSids = {
    'AN': 'Anonymous Logon',
    'AO': 'Account Operators',
    'RU': 'Alias to allow previous Windows 2000',
    'AU': 'Authenticated Users',
    'BA': 'Built-in Administrators',
    'BG': 'Built in Guests',
    'BO': 'Backup Operators',
    'BU': 'Built-in Users',
    'CA': 'Certificate Server Administrators',
    'CG': 'Creator Group',
    'CO': 'Creator Owner',
    'DA': 'Domain Administrators',
    'DC': 'Domain Computers',
    'DD': 'Domain Controllers',
    'DG': 'Domain Guests',
    'DU': 'Domain Users',
    'EA': 'Enterprise Administrators',
    'ED': 'Enterprise Domain Controllers',
    'WD': 'Everyone',
    'PA': 'Group Policy Administrators',
    'IU': 'Interactively logged-on user',
    'LA': 'Local Administrator',
    'LG': 'Local Guest',
    'LS': 'Local Service Account',
    'SY': 'Local System',
    'NU': 'Network Logon User',
    'NO': 'Network Configuration Operators',
    'NS': 'Network Service Account',
    'PO': 'Printer Operators',
    'PS': 'Self',
    'PU': 'Power Users',
    'RS': 'RAS Servers group',
    'RD': 'Terminal Server Users',
    'RE': 'Replicator',
    'RC': 'Restricted Code',
    'SA': 'Schema Administrators',
    'SO': 'Server Operators',
    'SU': 'Service Logon User'
}


WellKnownSids = {
    // XXX: add matching for the class types
    'S-1-0': 'Null Authority',
    'S-1-0-0': 'Nobody',
    'S-1-1': 'World Authority',
    'S-1-1-0': 'Everyone',
    'S-1-2': 'Local Authority',
    'S-1-2-0': 'Local ',
    'S-1-2-1': 'Console Logon ',
    'S-1-3': 'Creator Authority',
    'S-1-3-0': 'Creator Owner',
    'S-1-3-1': 'Creator Group',
    'S-1-3-2': 'Creator Owner Server',
    'S-1-3-3': 'Creator Group Server',
    'S-1-3-4': 'Owner Rights ',
    'S-1-5-80-0': 'All Services ',
    'S-1-4': 'Non-unique Authority',
    'S-1-5': 'NT Authority',
    'S-1-5-1': 'Dialup',
    'S-1-5-2': 'Network',
    'S-1-5-3': 'Batch',
    'S-1-5-4': 'Interactive',
    //'S-1-5-5-X-Y': 'Logon Session',
    'S-1-5-6': 'Service',
    'S-1-5-7': 'Anonymous',
    'S-1-5-8': 'Proxy',
    'S-1-5-9': 'Enterprise Domain Controllers',
    'S-1-5-10': 'Principal Self',
    'S-1-5-11': 'Authenticated Users',
    'S-1-5-12': 'Restricted Code',
    'S-1-5-13': 'Terminal Server Users',
    'S-1-5-14': 'Remote Interactive Logon ',
    'S-1-5-15': 'This Organization ',
    'S-1-5-17': 'This Organization ',
    'S-1-5-18': 'Local System',
    'S-1-5-19': 'NT Authority',
    'S-1-5-20': 'NT Authority',
    // 'S-1-5-21domain-500': 'Administrator',
    // 'S-1-5-21domain-501': 'Guest',
    // 'S-1-5-21domain-502': 'KRBTGT',
    // 'S-1-5-21domain-512': 'Domain Admins',
    // 'S-1-5-21domain-513': 'Domain Users',
    // 'S-1-5-21domain-514': 'Domain Guests',
    // 'S-1-5-21domain-515': 'Domain Computers',
    // 'S-1-5-21domain-516': 'Domain Controllers',
    // 'S-1-5-21domain-517': 'Cert Publishers',
    // 'S-1-5-21root domain-518': 'Schema Admins',
    // 'S-1-5-21root domain-519': 'Enterprise Admins',
    // 'S-1-5-21domain-520': 'Group Policy Creator Owners',
    // 'S-1-5-21domain-553': 'RAS and IAS Servers',
    'S-1-5-32-544': 'Administrators',
    'S-1-5-32-545': 'Users',
    'S-1-5-32-546': 'Guests',
    'S-1-5-32-547': 'Power Users',
    'S-1-5-32-548': 'Account Operators',
    'S-1-5-32-549': 'Server Operators',
    'S-1-5-32-550': 'Print Operators',
    'S-1-5-32-551': 'Backup Operators',
    'S-1-5-32-552': 'Replicators',
    'S-1-5-64-10': 'NTLM Authentication ',
    'S-1-5-64-14': 'SChannel Authentication ',
    'S-1-5-64-21': 'Digest Authentication ',
    'S-1-5-80': 'NT Service ',
    'S-1-5-80-0': 'All Services ',
    'S-1-5-83-0': 'NT VIRTUAL MACHINE\Virtual Machines',
    'S-1-16-0': 'Untrusted Mandatory Level ',
    'S-1-16-4096': 'Low Mandatory Level ',
    'S-1-16-8192': 'Medium Mandatory Level ',
    'S-1-16-8448': 'Medium Plus Mandatory Level ',
    'S-1-16-12288': 'High Mandatory Level ',
    'S-1-16-16384': 'System Mandatory Level ',
    'S-1-16-20480': 'Protected Process Mandatory Level ',
    'S-1-16-28672': 'Secure Process Mandatory Level ',
    'S-1-5-32-554': 'BUILTIN\Pre-Windows 2000 Compatible Access',
    'S-1-5-32-555': 'BUILTIN\Remote Desktop Users',
    'S-1-5-32-556': 'BUILTIN\Network Configuration Operators',
    'S-1-5-32-557': 'BUILTIN\Incoming Forest Trust Builders',
    'S-1-5-32-558': 'BUILTIN\Performance Monitor Users',
    'S-1-5-32-559': 'BUILTIN\Performance Log Users',
    'S-1-5-32-560': 'BUILTIN\Windows Authorization Access Group',
    'S-1-5-32-561': 'BUILTIN\Terminal Server License Servers',
    'S-1-5-32-562': 'BUILTIN\Distributed COM Users',
    // 'S-1-5-21domain-498': 'Enterprise Read-only Domain Controllers ',
    // 'S-1-5-21domain-521': 'Read-only Domain Controllers',
    'S-1-5-32-569': 'BUILTIN\Cryptographic Operators',
    // 'S-1-5-21 domain-571': 'Allowed RODC Password Replication Group ',
    // 'S-1-5-21 domain-572': 'Denied RODC Password Replication Group ',
    'S-1-5-32-573': 'BUILTIN\Event Log Readers ',
    'S-1-5-32-574': 'BUILTIN\Certificate Service DCOM Access ',
    // 'S-1-5-21-domain-522': 'Cloneable Domain Controllers',
    'S-1-5-32-575': 'BUILTIN\RDS Remote Access Servers',
    'S-1-5-32-576': 'BUILTIN\RDS Endpoint Servers',
    'S-1-5-32-577': 'BUILTIN\RDS Management Servers',
    'S-1-5-32-578': 'BUILTIN\Hyper-V Administrators',
    'S-1-5-32-579': 'BUILTIN\Access Control Assistance Operators',
    'S-1-5-32-580': 'BUILTIN\Remote Management Users'
}

SddlAceResourceAttributes = {
    // XXX:
}


function sddlLookupSid(sid) {
    // XXX: add support for class lookup
    var retval = null
    if (sid in WellKnownSids) {
        retval = WellKnownSids[sid]
    }
    return retval
}


function sddlMatchFlags(flags, flagDict, title) {
    var retval = {
        'value': flags,
        'details': []
    }
    if (typeof title !== 'undefined') {
        retval['title'] = title
    }
    while (flags.length > 0) {
        var off = 1 // ensure there is no infinite loop
        var flagKeys = Object.keys(flagDict).sort(function(a, b) {
            return b.length - a.length // sort by length - longest match first
        })
        for (var i = 0; i < flagKeys.length; i++) {
            var flag = flagKeys[i]
            if (flags.length >= flag.length &&
                flags.substring(0, flag.length) == flag) {
                off = flag.length
                retval['details'].push({
                    'value': flag,
                    'details': flagDict[flag]
                })
            }
        }
        flags = flags.substring(off)
    }
    return retval
}


function sddlParseACE(ace) {
    retval = {
        'value': ace,
        'title': 'ACE',
        'details': []
    }
    // strip off brackets if they are present
    ace = ace.replace('(', '')
    ace = ace.replace(')', '')
    parts = ace.split(';')
    if (parts.length < 6) {
        return retval
    }
    // ace_type
    if (parts[0].length > 0) {
        retval['details'].push({
            'value': parts[0],
            'title': 'Type',
            'details': {
                'value': parts[0],
                'details': parts[0] in SddlAceTypes ? SddlAceTypes[parts[0]]: null
            }
        })
    }
    // ace_flags
    if (parts[1].length > 0) {
        var flags = sddlMatchFlags(parts[1], SddlAceFlags, 'Flags')
        if (flags['details'].length) {
            retval['details'].push(flags)
        }        
    }
    // rights
    if (parts[2].length > 0) {
        var rights = sddlMatchFlags(parts[2], SddlAceRights, 'Rights')
        if (rights['details'].length) {
            retval['details'].push(rights)
        }
    }
    // object_guid
    if (parts[3].length > 0) {
        retval['details'].push({
            'value': parts[3],
            'title': 'ObjectGUID',
            'details': parts[3]
        })
    }
    // inherit_object_guid
    if (parts[4].length > 0) {
        retval['details'].push({
            'value': parts[4],
            'title': 'InheritObjectGUID',
            'details': parts[4]
        })
    }
    // account_sid
    if (parts[5].length > 0) {
        var details = parts[5]
        if (parts[5] in SddlSids) {
            details = SddlSids[parts[5]]
        } else {
            var sid = sddlLookupSid(parts[5])
            if (sid) {
                details = sid
            }
        }
        retval['details'].push({
            'value': parts[5],
            'title': 'AccountSid',
            'details': details
        })
    }
    // resource_attribute
    if (parts.length > 6) {
        retval['details'].push({
            'value': parts[6],
            'title': 'ResourceAttribute',
            'details': parts[6] // XXX: decode
        })
    }
    return retval
}


function sddlParseSD(sd) {
    // find the end of the flags
    var retval = {
        'value': sd,
        'title': 'Descriptor',
        'details': []
    }
    var end = sd.indexOf('(')
    var flags = ''
    var aceStr = sd
    if (end != -1) {
        flags = sd.substring(0, end)
        aceStr = sd.substring(end)
    } else {
        flags = sd
        aceStr = ''
    }
    // parse flags
    var flagRet = sddlMatchFlags(flags, SddlDaclFlags, 'Flags')
    if (flagRet['details'].length) {
        retval['details'].push(flagRet)
    }    
    // parse acl array
    var aceRet = {
        'value': aceStr,
        'title': 'ACEs',
        'details': []
    }
    var aces = aceStr.split(')')
    for (var i = 0; i < aces.length; i++) {
        var ace = aces[i].trim()
        if (ace.length > 0) {
            aceRet['details'].push(sddlParseACE(ace + ')'))
        }
    }
    if (aceRet['details'].length) {
        retval['details'].push(aceRet)
    }
    if (retval['details'].length == 0 ||
        (sd.indexOf('(') == -1 && sd.indexOf(';') != -1)) {
        retval = null // not an SD
    }
    return retval
}


function sddlParse(sddl) {
    var retval = {
        'value': sddl,
        'title': 'SDDL',
        'details': []
    }
    // split all the components
    var i = 0
    var idx = 0
    var components = {}
    while (i != -1) {
        i = sddl.indexOf(':', idx+1)
        if (i == -1) {
            break
        } else if (idx > 0) {
            components[sddl[idx-1]] = sddl.substring(idx+1, i-1)
        }
        idx = i
    }
    if (idx > 0) {
        components[sddl[idx-1]] = sddl.substring(idx+1)
    }

    // parse the bits
    if ('O' in components) {
        retval['details'].push({
            'value': 'O',
            'title': 'Owner',
            'details': {
                'value': components['O'],
                'details': components['O'] in SddlSids ? SddlSids[components['O']]: null
            }
        })
    }
    if ('G' in components) {
        retval['details'].push({
            'value': 'G',
            'title': 'Group',
            'details': {
                'value': components['G'],
                'details': components['G'] in SddlSids ? SddlSids[components['G']]: null
            }
        })
    }
    if ('D' in components) {
        retval['details'].push({
            'value': 'D',
            'title': 'DACL',
            'details': sddlParseSD(components['D'])
        })
    }
    if ('S' in components) {
        retval['details'].push({
            'value': 'S',
            'title': 'SACL',
            'details': sddlParseSD(components['S'])
        })
    }
    if (retval['details'].length == 0) {
        retval = null // not an SDDL
    }
    return retval
}


function sddlParseAny(sddl) {
    var retval = sddlParse(sddl)
    if (retval == null) {
        // try it as a SD
        retval = sddlParseSD(sddl)
        if (retval == null) {
            // try as an ACE
            retval = sddlParseACE(sddl)
        }
    }
    return retval
}
