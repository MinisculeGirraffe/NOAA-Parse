export const ceilingDeterminationCode = {
    "A": "Aircraft",
    "B": "Balloon",
    "C": "Statistically derived",
    "D": "Persistent cirriform ceiling (pre-1950 data)",
    "E": "Estimated",
    "M": "Measured",
    "P": "Precipitation ceiling (pre-1950 data)",
    "R": "Radar",
    "S": "ASOS augmented",
    "U": "Unknown ceiling (pre-1950 data)",
    "V": "Variable ceiling (pre-1950 data)",
    "W": "Obscured",
    "9" : "Missing"
}

// 'Ceiling and Visibility Okay' 
export const ceilingCAVOKCode = {
    "N": "No",
    "Y": "Yes",
    "9": "Missing"
}

export const skyCoverageCode = {
    "0": "Clear - No coverage",
    "00": "None, SKC or CLR",
    "01": "One okta - 1/10 or less but not zero",
    "1": "FEW - 2/8 or less coverage (not including zero)",
    "02": "Two oktas - 2/10 - 3/10, or FEW",
    "2": "SCATTERED - 3/8-4/8 coverage 3 = BROKEN - 5/8-7/8 coverage",
    "03": "Three oktas - 4/10",
    "04": "Four oktas - 5/10, or SCT",
    "4": "OVERCAST - 8/8 coverage",
    "05": "Five oktas - 6/10",
    "5": "OBSCURED",
    "06": "Six oktas - 7/10 - 8/10",
    "6": "PARTIALLY OBSCURED 9 = MISSING",
    "07": "Seven oktas - 9/10 or more but not 10/10, or BKN 08 = Eight oktas - 10/10, or OVC",
    "08": "Eight oktas - 10/10, or OVC",
    "09": "Sky obscured, or cloud amount cannot be estimated 10 = Partial obscuration",
    "10": "Partial obscuration 11 = Thin scattered",
    "12": "Scattered",
    "13": "Dark scattered",
    "14": "Thin broken 15 = Broken",
    "16": "Dark broken 17 = Thin overcast 18 = Overcast",
    "19": "Dark overcast 99 = Missing",
    "99": "Missing"
}


export const skyCharacteristicCode = {
    "1": "Variable height",
    "2": "Variable amount",
    "3": "Thin clouds",
    "4": "Dark layer (reported in data prior to 1950) 9 = Missing",
    "9": "Missing"
}

export const cloudTypeCode = {
    "00": "Cirrus (Ci)",
    "01": "Cirrocumulus (Cc)",
    "02": "Cirrostratus (Cs)",
    "03": "Altocumulus (Ac)",
    "04": "Altostratus (As)",
    "05": "Nimbostratus (Ns)",
    "06": "Stratocumulus (Sc)",
    "07": "Stratus (St)",
    "08": "Cumulus (Cu)",
    "09": "Cumulonimbus (Cb)",
    "10": "Cloud not visible owing to darkness, fog, duststorm, sandstorm, or other analogous phenonomena/sky obcured",
    "11": "Not used",
    "12": "Towering Cumulus (Tcu)",
    "13": "Stratus fractus (Stfra)",
    "14": "Stratocumulus Lenticular (Scsl)",
    "15": "Cumulus Fractus (Cufra)",
    "16": "Cumulonimbus Mammatus (Cbmam)",
    "17": "Altocumulus Lenticular (Acsl)",
    "18": "Altocumulus Castellanus (Accas)",
    "19": "Altocumulus Mammatus (Acmam)",
    "20": "Cirrocumulus Lenticular (Ccsl)",
    "21": "Cirrus and/or Cirrocumulus",
    "22": "jenkins-content-114Stratus and/or Fracto-stratus",
    "23": "Cumulus and/or Fracto-cumulus",
    "99": "Missing"
}

export const cloudTopCode = {
    "00": "Isolated cloud or fragments of clouds",
    "01": "Continuous flat tops",
    "02": "Broken cloud - small breaks, flat tops",
    "03": "Broken cloud - large breaks, flat tops",
    "04": "Continuous cloud, undulation tops",
    "05": "Broken cloud - small breaks, undulating tops",
    "06": "Broken cloud - large breaks, undulating tops",
    "07": "Continuous or almost continuous with towering clouds above the top of the layer 08 = Groups of waves with towering clouds above the top of the layer",
    "09": "Two of more layers at different levels 99 = Missing"
}

export const convectiveCloudCode = {
    "0": "None",
    "1": "ACSL (Altocumulus Standing Lenticular)",
    "2": "ACCAS (Altocumulus Castelanus)",
    "3": "TCU (Towering Cumulus)",
    "4": "MDT CU (Moderate Cumulus)",
    "5": "CB/CB MAM DISTANT (Cumulonimbus or Cumulonimbus Mammatus in the distance) 6 = CB/CBMAM (Cumulonimbus or Cumulonimbus Mammatus within 20 nautical miles)",
    "7": "Unknown",
    "9": "missing"
}
export const verticalDatumCode = {
    "AGL": "Above Ground Level",
    "ALAT": "Approximate lowest astronomical tide AP: Apparent",
    "CFB": "Crest of first berm",
    "CRD": "Columbia River datum",
    "ESLW": "Equatorial Spring low water GCLWD: Gulf Coast low water datum HAT: Highest astronomical tide HHW: Higher high water",
    "HTWW": "High tide wave wash",
    "HW": "High water",
    "HWFC": "High water full and change IND: Indefinite",
    "ISLW": "Indian Spring low water LAT: Lowest astronomical tide LLW: Lowest low water",
    "LNLW": "Lowest normal low water LRLW: Lower low water",
    "LSD": "Land survey datum",
    "LW": "Low water",
    "LWD": "Low water datum",
    "LWFC": "Low water full and charge MHHW: Mean higher high water MHLW: Mean higher low water MHW: Mean high water",
    "MHWN": "Mean high water neap MHWS: Mean high water spring MLHW: Mean lower high water",
    "MLLW": "Mean lower low water",
    "MLLWS": "Mean lower low water springs",
    "MLWN": "Mean low water neap MLW: Mean low water",
    "MLWS": "Mean low water spring MSL: Mean sea level",
    "MTL": "Mean tide level",
    "NC": "No correction",
    "NT": "Neap tide",
    "ST": "Spring tide",
    "SWA": "Storm wave action TLLW: Tropic lower low water UD: Undetermined",
    "UK": "Unknown",
    "WGS84E": "WGS84 Ellispoid WGS84G: WGS84 GEOID",
    "999999": "missing"
}


export const cloudGenusCodes = {
    low: {
        "00": "No low clouds",
        "01": "Cumulus humulis or Cumulus fractus other than of bad weather or both",
        "02": "Cumulus mediocris or congestus, with or without Cumulus of species fractus or humulis or",
        "03": "Stratocumulus all having bases at the same level",
        "04": "Cumulonimbus calvus, with or without Cumulus, Stratocumulus or Stratus",
        "05": "Stratocumulus cumulogenitus",
        "06": "Stratocumulus other than Stratocumulus cumulogenitus",
        "07": "Stratus nebulosus or Stratus fractus other than of bad weather, or both",
        "08": "Stratus fractus or Cumulus fractus of bad weather, both (pannus) usually below Altostratus or Nimbostratus. Cumulus and Stratocumulus other than Stratocumulus cumulogenitus, with bases at different levels Cumulonimbus capillatus (often with an anvil), with or without Cumulonimbus calvus,",
        "09": "Cumulus, Stratocumulus, Stratus or pannus",
        "99": "Missing"
    },
    middle: {
        "00": "No middle clouds",
        "01": "Altostratus translucidus",
        "02": "Altostratus opacus or Nimbostratus",
        "03": "Altocumulus translucidus at a single level",
        "04": "Patches(often lenticulre) of Altocumulus translucidus, continually changing and occurring at one or more levels",
        "05": "Altocumulus translucidus in bands, or one or more layers of Altocumulus translucidus or opacus, progressing invading the sky; these Altocumulus clouds generally thicken as a whole",
        "06": "Altocumulus cumulogentis(or cumulonimbogentus)",
        "07": "Altocumulus translucidus or opacus in two or more layers, or Altocumulus opacus in a single layer, not progressively invading the sky, or Altocumulus with Altostratus or Nimbostratus",
        "08": "Altocumulus castellanus or floccus",
        "09": "Altocumulus of a chaotic sky; generally at several levels",
        "99": "Missing"
    },
    high: {
        "00": "No High Clouds",
        "01": "Cirrus fibratus, sometimes uncinus, not progressively invading the sky",
        "02": "Cirrus spissatus, in patches or entangled sheaves, which usually do not increase and sometimes seem to be the remains of the upper part of a Cumulonimbus; or Cirrus castellanus or floccus",
        "03": "Cirrus spissatus cumulonimbogenitus",
        "04": "Cirrus unicinus or fibratus, or both, progressively invading the sky; they generally thicken as a whole",
        "05": "Cirrus (often in bands) and Cirrostratus, or Cirrostratus alone, progressively invading the sky; they generally thicken as a whole, but the continuous veil does not reach 45 degrees above the horizon",
        "06": "Cirrus (often in bands) and Cirrostratus, or Cirrostratus alone, progressively invading the sky; they generally thicken as a whole; the continuous veil extends more than 45 degrees above the horizon, without the sky being totally covered.",
        "07": "Cirrostratus covering the whole sky",
        "08": "Cirrostratus not progressively invading the sky and not entirely covering it",
        "09": "Cirrocumulus alone, or Cirrocumulus predominant among the High clouds",
        "99": "Missing"
    }
}

export const global_irradiance_data_flag = {
    "00": "Untested (raw data)",
    "01": "Passed one-component test; data fall within max-min limits of Kt, Kn, or Kd",
    "02": "Passed two-component test; data fall within 0.03 of the Gompertz boundaries",
    "03": "Passed three-component test; data come within + 0.03 of satisfying Kt = Kn + Kd",
    "04": "Passed visual inspection: not used by SERI_QC1",
    "05": "Failed visual inspection: not used by SERI_QC1",
    "06": "Value estimated; passes all pertinent SERI_QC tests",
    "07": "Failed one-component test; lower than allowed minimum",
    "08": "Failed one-component test; higher than allowed maximum",
    "09": "Passed three-component test but failed two-component test by 0.05",
    ...([...Array(94).keys()].map(i => { return "Failed two- or three- component tests in one of four ways." })), // super bad janky hack
    "94": "Data fails into physically impossible region where Kn > Kt by K-space distances of 0.05 to 0.10",
    "95": "Data fails into physically impossible region where Kn > Kt by K-space distances of 0.10 to 0.15",
    "96": "Data fails into physically impossible region where Kn > Kt by K-space distances of 0.15 to 0.20",
    "97": "Data fails into physically impossible region where Kn > Kt by K-space distances of > 0.20",
    "98": "Not used",
    "99": "Missing data",
}