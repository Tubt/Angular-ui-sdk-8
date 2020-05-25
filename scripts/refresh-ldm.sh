#!/bin/bash

SCRIPTDIR=`dirname $0`
ROOTDIR="${SCRIPTDIR}/.."
EXPORTER="${ROOTDIR}/node_modules/.bin/gdc-catalog-export"
OUTPUT="${ROOTDIR}/src/ldm/full.ts"
PROJECTID="ftjw66e62ax8u8z43bdpph5ufpbcz9z0"

$EXPORTER \
  --hostname "https://developer.na.gooddata.com" \
  --output "${OUTPUT}" \
  --project-id "${PROJECTID}" \
  --accept-untrusted-ssl