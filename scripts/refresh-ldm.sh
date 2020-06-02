#!/bin/bash

SCRIPTDIR=`dirname $0`
ROOTDIR="${SCRIPTDIR}/.."
EXPORTER="${ROOTDIR}/node_modules/.bin/gdc-catalog-export"
OUTPUT="${ROOTDIR}/src/ldm/full.ts"
PROJECTID="xskxypodp5s4p2t6x99b2szivf8qi3st"

$EXPORTER \
  --hostname "https://staging.intgdc.com" \
  --output "${OUTPUT}" \
  --project-id "${PROJECTID}" \
  --accept-untrusted-ssl